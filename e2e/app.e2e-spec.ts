import { WorkflowPage } from './app.po';

describe('workflow App', () => {
  let page: WorkflowPage;

  beforeEach(() => {
    page = new WorkflowPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
