import React from 'react';
import MyArticles from '../MyArticles';

export default {
  component: MyArticles,
  title: 'MyArticles',
  parameters: {
		layout: 'fullscreen'
	}
}

export const Default = () => <MyArticles />