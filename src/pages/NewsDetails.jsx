
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Header from '../components/Header';
import NewsDetailsBody from '../components/NewsDetailsBody';
import RighAside from '../components/homelayout/RighAside';

const NewsDetails = () => {
    const {id} = useParams();
    
    const data = useLoaderData();

    
    const [news, setNews] = useState({});
    // console.log('link:',id);
    // console.log( news);

    useEffect(() => {
        const match = data.filter(data => data.id == id);
        setNews(match)
    }, [id, data])
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto py-10'>
                <div className='grid grid-cols-12 gap-5 '>
                    <section className='col-span-9'>

                        <NewsDetailsBody news={news}>
                        </NewsDetailsBody>
                    </section>
                    <section className='col-span-3'>
                        <RighAside></RighAside>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default NewsDetails;