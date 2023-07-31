//our-domain.com/news
import {useRouter} from 'next/router'

function NewsItemPage () {
    const router = useRouter();

    console.log(router.query.newsId);
    
    return (
      <div>
        <p>Im sub page Next.js</p>
      </div>
    )
  }
  
  export default NewsItemPage