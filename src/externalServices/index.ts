import axios, { AxiosRequestConfig } from 'axios';
import { enviroments } from '../enviroments';
import { PortfolioServiceResponse } from './types';
import FormData from 'form-data';

const instance = axios.create({
  baseURL: enviroments.portfolioGeneratorServiceBaseUrl,
});

export const portfolioGeneratorService = {
  async generate(
    formData: FormData,
    config?: AxiosRequestConfig,
  ): Promise<PortfolioServiceResponse> {
    const { data } = await instance.post('/generate-portfolio', formData, {
      headers: {
        ...formData.getHeaders(),
      },
      ...config,
    });

    return data;
  },
};
