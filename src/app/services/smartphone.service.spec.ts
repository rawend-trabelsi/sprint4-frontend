import { Smartphone } from './../model/smartphone.model';
import { TestBed } from '@angular/core/testing';

import {SmartphoneService } from './smartphone.service';

describe('ProduitService', () => {
  let service: SmartphoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmartphoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
