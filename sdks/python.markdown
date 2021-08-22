---
layout: sdk
permalink: /sdks/python
title: Python SDK
sdk: python
---
```python
import time
import vrchatapi
from vrchatapi.api import authentication_api
from pprint import pprint

configuration = vrchatapi.Configuration(
    username = 'username',
    password = 'password'
)
configuration.api_key['apiKeyCookie'] = 'JlE5Jldo5Jibnk5O5hTx6XVqsJu4WJ26'

# Enter a context with an instance of the API client
with vrchatapi.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = authentication_api.AuthenticationApi(api_client)

    try:
        # Login and/or Get Current User Info
        api_response = api_instance.get_current_user()
        pprint(api_response)
    except vrchatapi.ApiException as e:
        print("Exception when calling AuthenticationApi->get_current_user: %s\n" % e)
```