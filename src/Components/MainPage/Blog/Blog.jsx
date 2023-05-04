import React from 'react';
import { Page, Text, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer'
import PDF from './PDF/PDF';
const styles = StyleSheet.create({

})
const Blog = () => {

    return (
        <div className='container mx-auto '>
            <PDFDownloadLink document={<PDF />} fileName='blog'>
                {({ loading }) => (loading ? <button className='bg-amber-400 text-lg font-semibold px-4 py-2 rounded-md mr-auto'>loading document ...</button> : <button className='bg-amber-400 text-lg font-semibold px-4 py-2 rounded-md mr-auto'>Download</button>)}
            </PDFDownloadLink>
            <div className=' mb-8'>
                <PDF />
            </div>
        </div>
    );
};

export default Blog;