import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoBolhaComponent } from './botao-bolha.component';

describe('BotaoBolhaComponent', () => {
  let component: BotaoBolhaComponent;
  let fixture: ComponentFixture<BotaoBolhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoBolhaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoBolhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
