import { RecommendedCoffee } from '@/models/coffee'

class RecommendedCoffeeApi {
  public getList() {
    return [
      new RecommendedCoffee({
        imgSrc: 'https://i.picsum.photos/id/1060/5598/3732.jpg',
        title: '南蛮屋Coffee',
        description: '溝の口駅の近くに点在する珈琲豆専門店。',
        updatedAt: '2020-05-11 20:30:11',
      }),
      new RecommendedCoffee({
        imgSrc: 'https://i.picsum.photos/id/0/5616/3744.jpg',
        title: '南蛮屋Coffee',
        description: '溝の口駅の近くに点在する珈琲豆専門店。',
        updatedAt: '2020-05-11 20:30:11',
      }),
      new RecommendedCoffee({
        imgSrc: 'https://i.picsum.photos/id/1060/5598/3732.jpg',
        title: '南蛮屋Coffee',
        description: '溝の口駅の近くに点在する珈琲豆専門店。',
        updatedAt: '2020-05-11 20:30:11',
      }),
      new RecommendedCoffee({
        imgSrc: 'https://picsum.photos/id/1010/5184/3456',
        title: '南蛮屋Coffee',
        description: '溝の口駅の近くに点在する珈琲豆専門店。',
        updatedAt: '2020-05-11 20:30:11',
      }),
      new RecommendedCoffee({
        imgSrc: 'https://picsum.photos/id/1042/3456/5184',
        title: '南蛮屋Coffee',
        description: '溝の口駅の近くに点在する珈琲豆専門店。',
        updatedAt: '2020-05-11 20:30:11',
      }),
      new RecommendedCoffee({
        imgSrc: 'https://picsum.photos/id/1049/3900/3120',
        title: '南蛮屋Coffee',
        description: '溝の口駅の近くに点在する珈琲豆専門店。',
        updatedAt: '2020-05-11 20:30:11',
      }),
      new RecommendedCoffee({
        imgSrc: 'https://picsum.photos/id/129/4910/3252',
        title: '南蛮屋Coffee',
        description: '溝の口駅の近くに点在する珈琲豆専門店。',
        updatedAt: '2020-05-11 20:30:11',
      }),
      new RecommendedCoffee({
        imgSrc: 'https://i.picsum.photos/id/1052/4000/2667.jpg',
        title: '南蛮屋Coffee',
        description: '溝の口駅の近くに点在する珈琲豆専門店。',
        updatedAt: '2020-05-11 20:30:11',
      }),
      new RecommendedCoffee({
        imgSrc: 'https://i.picsum.photos/id/1069/3500/2333.jpg',
        title: '南蛮屋Coffee',
        description: '溝の口駅の近くに点在する珈琲豆専門店。',
        updatedAt: '2020-05-11 20:30:11',
      }),
      new RecommendedCoffee({
        imgSrc: 'https://i.picsum.photos/id/1071/3000/1996.jpg',
        title: '南蛮屋Coffee',
        description: '溝の口駅の近くに点在する珈琲豆専門店。',
        updatedAt: '2020-05-11 20:30:11',
      }),
      new RecommendedCoffee({
        imgSrc: 'https://i.picsum.photos/id/117/1544/1024.jpg',
        title: '南蛮屋Coffee',
        description: '溝の口駅の近くに点在する珈琲豆専門店。',
        updatedAt: '2020-05-11 20:30:11',
      }),
    ]
  }
}

export const recommendedCoffeeApi = new RecommendedCoffeeApi()
