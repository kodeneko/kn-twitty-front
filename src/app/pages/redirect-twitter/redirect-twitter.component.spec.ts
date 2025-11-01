import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectTwitterComponent } from './redirect-twitter.component';

describe('RedirectTwitterComponent', () => {
  let component: RedirectTwitterComponent;
  let fixture: ComponentFixture<RedirectTwitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedirectTwitterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedirectTwitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
