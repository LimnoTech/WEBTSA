import sys
from WEBTSA.settings.base import *

#For error logging (helicon zoo error trace logging doesn't work)
#sys.stderr = open('err.log', 'w')

DATABASE_PATH = os.path.join(BASE_DIR, os.pardir, 'Internal')
DATABASES['default']['NAME'] = DATABASE_PATH;

DEBUG = False
TEMPLATE_DEBUG = False

SITE_ROOT = os.environ['APPL_PHYSICAL_PATH']
SITE_URL = os.environ['APPL_VIRTUAL_PATH'] + "/"

STATIC_ROOT = os.path.join(SITE_ROOT, 'static')
STATIC_URL = SITE_URL + 'static/'

