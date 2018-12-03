import { ApprouterModule } from './approuter.module';

describe('ApprouterModule', () => {
  let approuterModule: ApprouterModule;

  beforeEach(() => {
    approuterModule = new ApprouterModule();
  });

  it('should create an instance', () => {
    expect(approuterModule).toBeTruthy();
  });
});
