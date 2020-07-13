import _ from 'lodash';
import {sampleImg} from './images';
const sampleTxt = "این جمله توصیه استیو جابز به افرادی است که به دنبال رازهای موفقیت افراد موفق هستند. او می گوید همواره آرزوهایتان را دنبال کنید. به دنبال رؤیاهایتان بروید. حتی اگر رؤیایتان بزرگ است، راه برای رسیدن به آن وجود دارد."
export const samplePosts = [
    {
        id: 1,
        image: sampleImg,
        date: new Date(),
        user: 'Rahnama',
        description: sampleTxt,
        likes: 0,
        comments: [{user: 'reza', msg: 'good'}]
    }
]
export const postSchemaCreator = async (description, img=null) => {
    const posts = await _.isEmpty(localStorage.getItem('posts')) ? {} : JSON.parse(localStorage.getItem('posts'))
    const id = await _.isEmpty(posts) ? 1 : _.max(_.map(posts, 'id')) + 1;
    return {
        id: id,
        image: _.isEmpty(img) ? null : img,
        date: new Date(),
        user: 'Rahnama',
        description: description,
        likes: 0,
        comments: []
    }
}

