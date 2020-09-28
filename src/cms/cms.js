import CMS from 'netlify-cms-app';
import React, { useState, useEffect } from 'react';
import { StyleSheetManager } from 'styled-components';

import IndexPagePreview from './preview-templates/index-page-preview';
import DetailsPagePreview from './preview-templates/details-page-preview';
import RsvpPagePreview from './preview-templates/rsvp-page-preview';
import TravelAndStayPagePreview from './preview-templates/travel-and-stay-preview';

const StyleInjector = ({ children }) => {
  const [iframeRef, setIframeRef] = useState(null);

  useEffect(() => {
    const iframe = document.getElementsByTagName('iframe')[0];
    const iframeHeadElem = iframe.contentDocument.head;
    setIframeRef(iframeHeadElem);
  }, []);

  return iframeRef && <StyleSheetManager target={iframeRef}>{children}</StyleSheetManager>;
};

const withStyledComponentsRendered = Comp => {
  return props => (
    <StyleInjector>
      <Comp {...props} />
    </StyleInjector>
  );
};

CMS.registerPreviewTemplate('index', withStyledComponentsRendered(IndexPagePreview));
CMS.registerPreviewTemplate('details', withStyledComponentsRendered(DetailsPagePreview));
CMS.registerPreviewTemplate('rsvp', withStyledComponentsRendered(RsvpPagePreview));
CMS.registerPreviewTemplate('travelAndStay', withStyledComponentsRendered(TravelAndStayPagePreview));
