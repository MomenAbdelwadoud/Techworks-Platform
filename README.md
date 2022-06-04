# A platform for Savannah Techworks program

![alt Techworks](frontend/src/assets/TechWorks%20final%20design.png)

## Overview

1. Every Participant has an account whether he/she is a student/mentor/coordinator.

2. Schedule management view to access all the past or upcoming lectures with their assignments/notes and edit access for the coordinator.

3. All Participants view to present every student's profile and progress in one place.

4. Mailing list tool the allow the coordinator to send emails to all participants directly from inside the platform.

5. Better attendance-taking experience using unique QRcodes for all participants.


## Future features

1. Automated emails sent as a reminder for sessions/tasks.

2. Group/direct messaging.

3. Hosting on Savannah domain.

4. Submission system and automated review of assignments code.

5. Better Mobile phones responsiveness.

6. Profile photos/cover photos for each profile.

## First time code Setup

- Download/clone repo to a new empty folder.
- Install [python3]('https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjS3sGu3uX3AhUFIcUKHQulCKwQFnoECAUQAQ&url=https%3A%2F%2Fphoenixnap.com%2Fkb%2Fhow-to-install-python-3-windows&usg=AOvVaw3jsOWttzNHMoKMfRTA3qNM') and [pip]('https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwj0uafY3eX3AhWHhv0HHZiQC18QFnoECBAQAQ&url=https%3A%2F%2Fwww.geeksforgeeks.org%2Fhow-to-install-pip-on-windows%2F&usg=AOvVaw2bxbboPBImS9cK6iIBynss') and [setup up vscode]('https://www.pylenin.com/blogs/install-vscode-for-python3/').
- Install Django and other dependencies with `pip install -Iv django==3.1.1`.
- Install api libraries `pip install djangorestframework django-cors-headers`.
- Install [nodejs and npm]('https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiPypu53-X3AhWXD-wKHQLrAb8QFnoECA4QAw&url=https%3A%2F%2Fphoenixnap.com%2Fkb%2Finstall-node-js-npm-on-windows&usg=AOvVaw3VdOBLmIpQCg4BdlkrEvBM) and then install [Yarn]('https://phoenixnap.com/kb/yarn-windows').
- Open front-end dir `cd front-end` Install React dependencies with `yarn install`.
- On front-end dir start react app `yarn run start`
- On back-end dir run Django server using `python manage.py runserver`.

## Project structure

- A front-end folder that contains React.js installed with MaterialUI and axios.
- A back-end folder that contains django, django_rest_framework and a 'api' app that has the main code.
