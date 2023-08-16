import requests

base_url = "https://flights-api.buraky.workers.dev/"


def test_http_status_code():
    response = requests.get(base_url)
    assert response.status_code == 200, f"Expected status code 200, but got {response.status_code}"


def test_response_structure():
    response = requests.get(base_url)
    assert response.headers["Content-Type"] == "application/json", "Content-Type header is not application/json"

    try:
        response_data = response.json()
        if "data" in response_data and isinstance(response_data["data"], list):
            for flight in response_data["data"]:
                assert all(key in flight for key in ["id", "from", "to", "date"]), "Flight structure is incorrect"
        else:
            assert False, "'data' field not found in response"
    except ValueError:
        assert False, "Invalid JSON response"


def main():
    try:
        test_http_status_code()
        print("HTTP status code test passed.")

        test_response_structure()
        print("Response structure test passed.")

        print("All tests passed successfully!")
    except AssertionError as e:
        print("Test failed:", e)

    try:
        response = requests.get(base_url)
        response_data = response.json()
        if "data" in response_data and isinstance(response_data["data"], list):
            for flight in response_data["data"]:
                print("Flight:")
                print(f"Id: {flight['id']}")
                print(f"From: {flight['from']}")
                print(f"To: {flight['to']}")
                print(f"Date: {flight['date']}")
                print("----------------------")
    except:
        print("Unable to fetch response or response structure incorrect.")


if __name__ == "__main__":
    main()
