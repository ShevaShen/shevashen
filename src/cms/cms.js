import CMS from 'netlify-cms';

import BlogPostPreview from './preview-templates/BlogPostPreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import PortfolioPostPreview from './preview-templates/PortfolioPostPreview';
import PortfolioPagePreview from './preview-templates/PortfolioPagePreview';

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('portfolio', PortfolioPagePreview);
CMS.registerPreviewTemplate('portfolio-post', PortfolioPostPreview);
