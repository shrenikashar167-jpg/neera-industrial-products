/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: 'Stain Removal' | 'Fabric Care' | 'Multi-Purpose' | 'Specialty' | 'Industrial';
  image: string;
  specs: {
    pH: string;
    dilution: string;
    appearance: string;
    fragrance: string;
    packaging: string;
  };
  safetySheetUrl: string;
}

export interface InquiryFormInput {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  requirement: string;
  message: string;
}

export interface ClientPartner {
  name: string;
  iconName: string;
}

export interface IndustrySegment {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  details: string[];
}
