import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import IndexPagePreview from './preview-templates/index-page-preview';
import DetailsPagePreview from './preview-templates/details-page-preview';
import RsvpPagePreview from './preview-templates/rsvp-page-preview';
import TravelAndStayPagePreview from './preview-templates/travel-and-stay-preview';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('details', DetailsPagePreview);
CMS.registerPreviewTemplate('rsvp', RsvpPagePreview);
CMS.registerPreviewTemplate('travelAndStay', TravelAndStayPagePreview);
