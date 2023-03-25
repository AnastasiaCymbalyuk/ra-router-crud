import React from 'react';
import Post from './Post';

export default function Posts({ data }) {
    return data.map((item) => <Post post={item} key={item.id} />);
}