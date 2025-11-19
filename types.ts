import React from 'react';

export interface Tier {
  name: string;
  price: number;
  description: string;
  features: string[];
  valueProp: string;
  highlight?: boolean;
}

export interface Feature {
  title: string;
  problem: string;
  solution: string;
  icon: React.ElementType;
}

export interface ComparisonItem {
  metric: string;
  oldWay: string;
  newWay: string;
}