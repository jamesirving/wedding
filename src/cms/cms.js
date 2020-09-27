import CMS from 'netlify-cms-app';

import IndexPagePreview from './preview-templates/index-page-preview';
import DetailsPagePreview from './preview-templates/details-page-preview';
import RsvpPagePreview from './preview-templates/rsvp-page-preview';
import TravelAndStayPagePreview from './preview-templates/travel-and-stay-preview';

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('details', DetailsPagePreview);
CMS.registerPreviewTemplate('rsvp', RsvpPagePreview);
CMS.registerPreviewTemplate('travelAndStay', TravelAndStayPagePreview);
