import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'

const Home = () => {

  const [category,setCategory] = useState("All")

  return (
    <>
      <Header/>
      <ExploreMenu setCategory={setCategory} category={category}/>
    </>
  )
}

export default Home


// useState("All") 在這個 React Food Delivery App 中的作用:
// 透過useState,我們可以在App的不同組件之間共享和更新這個category狀態。當category狀態發生變化時,相關的組件會自動重新渲染,以反映最新的餐點類別選擇。
// 在 Home.jsx 中,我們使用了 React 的 useState Hook 來定義一個名為 category 的狀態變數,並將其初始值設為 "All"。
// 這個狀態變數的目的是用來追蹤當前選擇的餐點類別。
// const [category, setCategory] = useState("All");
// 通過將初始值設為 "All",我們預設顯示所有類別的餐點。當使用者點擊 ExploreMenu 組件中的特定類別時,
// 會觸發 setCategory 函數,更新 category 狀態變數的值為所選擇的類別名稱。
// 在 ExploreMenu.jsx 中,我們透過 props 將 category 和 setCategory 傳遞給 ExploreMenu 組件:
// <ExploreMenu setCategory={setCategory} category={category}/>
// 這樣,ExploreMenu 組件就能夠根據當前的 category 值來決定要顯示哪些餐點,並在使用者點擊不同類別時更新 category 的值。
// 當 category 的值為 "All" 時,表示顯示所有類別的餐點;當 category 的值為特定類別名稱時,就會只顯示該類別的餐點。
// 這種機制允許使用者通過點擊不同的類別來篩選和瀏覽餐點。
// 總結來說,useState("All") 的作用是初始化 category 狀態變數為 "All",作為預設顯示所有類別餐點的起點。
// 透過與 ExploreMenu 組件的互動,使用者可以動態地更新 category 的值,實現餐點類別的篩選功能。



// setCategory={setCategory}: 這是將 Home 組件中的 setCategory 函數作為 prop 傳遞給 ExploreMenu 組件,
// 使 ExploreMenu 組件能夠更新 category 的值。
// category={category}: 這是將 Home 組件中的 category 狀態變數作為 prop 傳遞給 ExploreMenu 組件,
// 使 ExploreMenu 組件能夠根據當前選擇的類別來顯示相應的餐點。