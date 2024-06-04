import React, { useContext } from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>

                    <img src={item.menu_image} className={category===item.menu_name?"active":""} alt="" />
                    {/* 當目前選取的類別(category)與該餐點類別的名稱(item.menu_name)相同時,為該圖片添加一個名為"active"的CSS類別,否則不添加任何類別。 */}
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu


// setCategory 函式接收一個回呼函式作為參數，該回呼函式根據先前的類別狀態和當前菜單項目的類別來計算新的類別狀態。
// 這種方式提供了更加靈活和可控的狀態更新方式，確保了狀態的正確性和一致性。
// prev => prev === item.menu_name ? "All" : item.menu_name 這個回呼函式使用了箭頭函式的簡化語法。它接收 prev
//  作為參數，表示先前的類別狀態。然後，它使用三元運算子  ?:  來判斷新的類別狀態：
// 如果先前的類別狀態 prev 與當前菜單項目的類別  item.menu_name 相同，則返回 "All"，表示將類別重置為 "All"。
// 否則，返回當前菜單項目的類別  item.menu_name ，表示將類別設置為該菜單項目的類別。


// 使用 index 作為key是一種常見的做法,特別是當列表項沒有一個穩定的唯一識別符時。
// 然而,在某些情況下,使用 index 作為key可能會導致一些潛在的問題:  如果列表項的順序可能會改變,
// 使用 index 作為key可能會導致性能問題和錯誤的組件狀態。 如果列表項可以被添加、刪除或重新排序,
// 使用index 作為key可能會導致不必要的組件重新渲染。  
// 因此,在可能的情況下,最好使用列表項的一個穩定的、唯一的識別符作為key,例如數據庫中的ID。
// 如果列表項沒有這樣的識別符,並且列表的順序是固定的,那麼使用 index 作為key也是可以接受的。  
// 在這個Food Delivery App的例子中,如果 menu_list 是一個固定的、不會改變順序的數組,那麼使用 index 作為key是沒有問題的。
// 但是,如果 menu_list 可能會動態變化,最好為每個餐點類別提供一個唯一的ID,並使用該ID作為key。

