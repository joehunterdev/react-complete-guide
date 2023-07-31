//our-domain.com/news
import {useRouter} from 'next/router'

function NewsPage () {
  
   const router = useRouter();

    console.log(router.query.newsId);
   
    return (
      <div>
        <p>Hello Next.js</p>
      </div>
    )
  }
  
  export default NewsPage