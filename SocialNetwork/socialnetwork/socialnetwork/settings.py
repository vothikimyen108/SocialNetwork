"""
Django settings for socialnetwork project.
Generated by 'django-admin startproject' using Django 3.2.6.
For more information on this file, see
https://docs.djangoproject.com/en/3.2/topics/settings/
For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.2/ref/settings/
"""

from pathlib import Path

import cloudinary
import cloudinary.uploader
import cloudinary.api

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-&ylba8*0v82y@(w054v0q=^4k59ja4)h#5xhr966f#(19orym1'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []

AUTH_USER_MODEL = 'charityapp.User'

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'charityapp.apps.CharityappConfig',
    'cloudinary_storage',
    'cloudinary',
    'oauth2_provider',
    'rest_framework',
    'drf_yasg',
    'corsheaders',
    # 'ckeditor',
    # 'ckeditor-uploader'
]
REST_FRAMEWORK = {
    'DEFAULT_PAGINATION_CLASS':
        'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 30,
    'DEFAULT_PARSER_CLASSES': [
        'rest_framework.parsers.FormParser',
        'rest_framework.parsers.MultiPartParser',
        'rest_framework.parsers.JSONParser'
    ],
    'DEFAULT_FILTER_BACKENDS': ['django_filters.rest_framework.DjangoFilterBackend'],

    'DEFAULT_AUTHENTICATION_CLASSES': ('oauth2_provider.contrib.rest_framework.OAuth2Authentication',
                                       'rest_framework.authentication.SessionAuthentication'),
}

#gửi mail
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_USE_TLS = True
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_HOST_USER = 'socialnetwork1081111@gmail.com'
EMAIL_HOST_PASSWORD = 'voyen24.12'
EMAIL_PORT = 587





# #chạy post man bỏ biến này ra
OAUTH2_PROVIDER = {
     'OAUTH2_BACKEND_CLASS': 'oauth2_provider.oauth2_backends.JSONOAuthLibCore',
}


# OAUTH2_INFO = {
#     "client_id": "akx1bLCdoAd2tOPQfnHlYQYnAPhONkCUlRn3kgYj",
#     "client_secret": "p19XK5VlYN4EBYqkcVgGOwDDdtTiIILM2FIiH5DXbwkpjDUzMh3o5amdRgYqvTuT4uTShdR5VxPJC0uvceGLAim3ZsGP73CruyyTvcKJ60UPNBbwMnnvsuIzmxUsYqkC"
# }

#auth cua en
OAUTH2_INFO = {
    "client_id": "paqmI9h2jDRsXymvRUoaQDtSocolCk8HvEjukZGE",
    "client_secret": "Gf26B3APWmjlP2wr53gFPtyJelKzicuvbaQh4Hfhkv0E6EUS7H7jmGV0yedJ5bJuZEzg5yWfBvcfyWNLCX5lf2FO0GGHwstOmBB85xQ98HstEwlAsvY4sKtHW1q2TQEl"
}

CORS_ORIGIN_ALLOW_ALL = True

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
]

ROOT_URLCONF = 'socialnetwork.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'socialnetwork.wsgi.application'

# Database
# https://docs.djangoproject.com/en/3.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'socialnetworkv2',
        'USER': 'root',
        'PASSWORD': '123456789',
        'HOST': '',
    }
}

# Password validation
# https://docs.djangoproject.com/en/3.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# Internationalization
# https://docs.djangoproject.com/en/3.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.2/howto/static-files/

STATIC_URL = '/static/'

# Default primary key field type
# https://docs.djangoproject.com/en/3.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'


MEDIA_URL = '/SocialNetwork/'  # NÀY LÀ THƯ MỤC TRÊN CLOUDINARY

DEFAULT_FILE_STORAGE = 'cloudinary_storage.storage.MediaCloudinaryStorage'  # LƯU TRỮ KIỂU ẢNH

# INFO ACCOUNT CLOUDINARY

CLOUDINARY_STORAGE = {
    'CLOUD_NAME': 'ou-hcmc',
    'API_KEY': '969386329894481',
    'API_SECRET': 'mg_eWP3Hbfzx-csv5H-9uPVcBA4'
}