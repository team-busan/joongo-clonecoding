import React from 'react'

export default function SearchFilter() {
  return (
    <table>
      <tr>
        <th>카테고리</th>
        <td>전체</td>
      </tr>
      <tr>
        <th>가격</th>
        <td>
          <input type = "text"/>
          <span>~</span>
          <input type = "text"/>
          <button>적용</button>
        </td>
      </tr>
      <tr>
        <th>옵션</th>
        <td>
          <input type = "radio" name = "productState"/>중고상품
          <input type = "radio" name = "productState"/>새상품
        </td>
      </tr>
      <tr>
        <th>선택한 필터</th>
        <td>전체</td>
      </tr>
    </table>
  )
}
