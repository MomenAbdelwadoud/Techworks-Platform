## First time Setup

- Download/clone repo to a new empty folder.
- Install [python3]('https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjS3sGu3uX3AhUFIcUKHQulCKwQFnoECAUQAQ&url=https%3A%2F%2Fphoenixnap.com%2Fkb%2Fhow-to-install-python-3-windows&usg=AOvVaw3jsOWttzNHMoKMfRTA3qNM') and [pip]('https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwj0uafY3eX3AhWHhv0HHZiQC18QFnoECBAQAQ&url=https%3A%2F%2Fwww.geeksforgeeks.org%2Fhow-to-install-pip-on-windows%2F&usg=AOvVaw2bxbboPBImS9cK6iIBynss') and [setup up vscode]('https://www.pylenin.com/blogs/install-vscode-for-python3/').
- Install Django and other dependencies with `pip install -Iv django==3.1.1`.
- Install api libraries `pip install djangorestframework django-cors-headers`.
- install [nodejs and npm]('https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiPypu53-X3AhWXD-wKHQLrAb8QFnoECA4QAw&url=https%3A%2F%2Fphoenixnap.com%2Fkb%2Finstall-node-js-npm-on-windows&usg=AOvVaw3VdOBLmIpQCg4BdlkrEvBM) and then install [Yarn]('https://phoenixnap.com/kb/yarn-windows').
- Open front-end dir `cd front-end` Install React dependencies with `yarn install`. 
- On front-end dir start react app `yarn run start`
- On back-end dir run Django server using `python manage.py runserver`.

## Project structure:

- A front-end folder that contains React.js installed with MaterialUI and axios.
- A back-end folder that contains django, django_rest_framework and a 'techworks_platform' app that has the main code.

## Usage:

- Files are already set to run the project.
- Use 'serializers.py' to transfer models into JSON.
- Define the serializer and the query set on 'tech_works_platform'.
- use axios on the front-end to call api request on `/api/techworks_platform`.
- Each side (front+back) will run as a server on different port (mostly 8080 for django and 3000 for React).
- Django should not use any html to render anything, only admin panel and rest_framework.
- Before making changes Sync(pull) and after editing commit and sync changes(push).
