import React from 'react'

import * as S from './StudentInfo.styled'

const StudentInfo: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <S.Title>学生情報</S.Title>
        <S.Text>
          <p>田村俊</p>
        </S.Text>
      </S.Content>
      <S.Content>
        <S.Title>学歴</S.Title>
        <S.Text>
          <p>高校：千葉県立東葛飾高等学校</p>
          <p>大学：東京理科大学 理工学部 機械工学科</p>
          <p>大学院：東京工業大学大学院 工学院 機械系</p>
        </S.Text>
      </S.Content>
      <S.Content>
        <S.Title>研究</S.Title>
        <S.Text>
          <p>
            私は学部4年時に「固気混相乱流境界層における粒子動力学のPTVによる実験的解析」という題目で流体力学分野の研究を行いました．固気混相流とは砂漠の飛砂などのような固体粒子と気体の混じり合った流れです．実験的に再現した固気混相流から，PTVと呼ばれるレーザー計測手法によって取得した，固気混相流中の粒子の速度や加速度をもとに，粒子動力学（粒子の運動方程式や粒子速度の確率密度関数）の解析を行いました．現在，大学院では，研究室を変更しまして，応用脳科学や視覚/触覚/マルチモーダル知覚過程，マンマシンインターフェースとユーザビリティ評価を研究分野とする研究室に所属しています．大学院での研究はまだ，構想段階ですが，インターフェースとしてAR/VRやEye
            tracking，自動運転の技術を勉強しています．
          </p>
        </S.Text>
      </S.Content>
    </S.Wrapper>
  )
}

export default StudentInfo
