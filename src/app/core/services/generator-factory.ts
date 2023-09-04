import { InjectionToken } from '@angular/core';
import { GeneratorService } from './generator.service';

export const GENERATED_STRING = new InjectionToken<string>('GeneratedString');

export function GeneratorFactory(n: number, generatorService: GeneratorService): string {
  return generatorService.generate(n);
}