import { OperationDay } from '../types';

export class CreateHiddenGemsRequest {
  title: string;
  price_start: number;
  price_end: number;
  location: string;
  rating: number;
  category_id: string;
  operation_days: OperationDay[];
  description: string;
  photos: Express.Multer.File[];
  user_id: string;
}
