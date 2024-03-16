import requests

url = 'http://127.0.0.1:1337/admin'

response = requests.get(url)

if response.status_code == 200:
    print("Yêu cầu thành công!")
    print("Nội dung trang web:")
    print(response.text)
else:
    print("Yêu cầu không thành công. Mã trạng thái:", response.status_code)
