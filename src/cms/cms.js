import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import IndexPagePreview from './preview-templates/IndexPagePreview';
import DetailsPagePreview from './preview-templates/DetailsPagePreview';
import RsvpPagePreview from './preview-templates/RsvpPagePreview';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('details', DetailsPagePreview);
CMS.registerPreviewTemplate('rsvp', RsvpPagePreview);
