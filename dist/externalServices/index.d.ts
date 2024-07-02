import { AxiosRequestConfig } from 'axios';
import { PortfolioServiceResponse } from './types';
import FormData from 'form-data';
export declare const portfolioGeneratorService: {
    generate(formData: FormData, config?: AxiosRequestConfig): Promise<PortfolioServiceResponse>;
};
