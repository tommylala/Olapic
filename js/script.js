{
  "metadata": {
    "code": 200,
    "message": "OK",
    "version": "v2.0"
  },
  "data": {
  "_links": {
    "self": {
      "href": "//photorankapi-a.akamaihd.net/?auth_token=0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18&version=v2.2"
    }
  },
  "_fixed": true,
  "_embedded": {
    "customer": {
  "_links": {
    "self": {
      "href": "//photorankapi-a.akamaihd.net/customers/215757?auth_token=0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18&version=v2.2"
    }
  },
  "id": "215757",
  "_fixed": true
    ,
  "name": "Demo Account",
  "domain": "",
  "template_dir": "demo",
  "language": "en_US",
  "settings": {"force_viewer_modal":true,"column_number":"3","items_per_page":10,"uploader_actions":"listSources,labeling,login,finish","show_in_home":"bestphotos","show_in_home_id":"0","force_https":false,"ab_testing":0,"olapicU":"disabled","customer_dependant":{"viewer":"viewer2v2","widget":"widget2","uploader":"uploader1v2","assets2":"default"},"analytics_cookie_domain":"","premoderation":false,"tagging":false,"analytics_api_version":"v2","analytics_checkout_file_prefix":"","analytics_dashboard_engagement":false,"analytics_conversion_interval":"30-minutes","currency":"$","analytics_enterprise_analytics":false,"currency_info":{"code":"USD","symbol":"$","name":"United States Dollar"},"analytics_error_tracking":false,"analytics_ga_integration":true},
  "views": {
        "viewer": "//photorankstatics-a.akamaihd.net/assets/demo/viewer2v2.html",    
        "uploader": "//photorankstatics-a.akamaihd.net/assets/demo/uploader1v2.html"
      },
  "_embedded": {
    "user": {
      "_links": {
        "self": {
          "href": "//photorankapi-a.akamaihd.net/users/330065?auth_token=0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18&version=v2.2"
        }
      },
      "id": "330065",
      "_fixed": false
    },
    "media": {
      "_links": {
        "self": {
          "href": "//photorankapi-a.akamaihd.net/customers/215757/media/recent?auth_token=0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18&version=v2.2"
        }
      },
      "_fixed": false
    },
    "media:recent": {
      "_links": {
        "self": {
          "href": "//photorankapi-a.akamaihd.net/customers/215757/media/recent?auth_token=0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18&version=v2.2"
        }
      },
      "_fixed": false
    },
    "media:shuffled": {
      "_links": {
        "self": {
          "href": "//photorankapi-a.akamaihd.net/customers/215757/media/shuffled?auth_token=0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18&version=v2.2"
        }
      },
      "_fixed": false
    },
    "media:photorank": {
      "_links": {
        "self": {
          "href": "//photorankapi-a.akamaihd.net/customers/215757/media/photorank?auth_token=0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18&version=v2.2"
        }
      },
      "_fixed": false
    },
    "media:rated": {
      "_links": {
        "self": {
          "href": "//photorankapi-a.akamaihd.net/customers/215757/media/rated?auth_token=0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18&version=v2.2"
        }
      },
      "_fixed": false
    }
  },
  "_forms": {
    "streams:search": {
      "title": "Search streams",
      "action": {
        "href": "//photorankapi-a.akamaihd.net/customers/215757/streams/search"
      },
      "method": "GET",
      "fields": [
        {
          "type": "text",
          "prompt": "Product ID",
          "name": "tag_key",
          "value": "",
          "placeholder": ""
        }
      ]
    },
    "categories:search": {
      "title": "Search categories",
      "action": {
        "href": "//photorankapi-a.akamaihd.net/customers/215757/categories/search"
      },
      "method": "GET",
      "fields": [
        {
          "type": "text",
          "prompt": "Tag",
          "name": "tag_key",
          "value": "",
          "placeholder": ""
        }
      ]
    },
    "stashes:create": {
      "title": "Create stash",
      "action": {
        "href": "//photorankapi-a.akamaihd.net/stashes"
      },
      "method": "POST",
      "fields": [
        {
          "type": "file",
          "prompt": "File",
          "name": "file",
          "value": "",
          "placeholder": ""
        }
      ]
    },
    "users:create": {
      "title": "Create user",
      "action": {
        "href": "//photorankapi-a.akamaihd.net/users"
      },
      "method": "POST",
      "fields": [
        {
          "type": "text",
          "prompt": "Email",
          "name": "email",
          "value": "",
          "placeholder": ""
        },
        {
          "type": "text",
          "prompt": "Screen name",
          "name": "screen_name",
          "value": "",
          "placeholder": ""
        },
        {
          "type": "text",
          "prompt": "Avatar URL",
          "name": "avatar_url",
          "value": "",
          "placeholder": ""
        }
      ]
    }
  }
  }
  }
}

}