import styled from "styled-components";

const SearchWarp = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  .left-wrap {
    flex: 1;
    border-left: 1px solid rgba(192,198,204,1);
    display: flex;
    border-right: none;
    .condition{
        height: 26px;
        display: inline-block;
        margin-top: 2px;
    }
    .condition-item{
        height: 26px;
        display: inline-block;
        line-height: 26px;
        background: #EFF3F8;
        border-radius: 2px;
        background-color: #EFF3F8;
        padding: 0 8px;
        margin: 0 2px;
        font-size: 12px;
        color: #333;
        position: relative;
        
    }
    .condition-select{
      width: 100%;
      height: 100%;
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
    }
    .forms{
      flex: 1;
    }
    .main-input{, 'multi'
      height: auto;
      border: none;
      &.single{
        flex: 1;
      }
      &.multi{
        width: 100%;
      }
      
      .next-input{
        height: auto;
      }
    }
  }
  .right-wrap {
    width: 32px;
    height: 32px;
    .search-btn{
      width: 32px;
      height: 32px;
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
    }
  }
`;


const MultiBtnWarp = styled.div`
  padding: "0 4px";
  text-align: "center";
  /* display: "flex"; */
  /* justify-content: "start"; */
  .pri-btn{
    margin-right: 8px;
    width: auto;
    min-width: auto;
    padding: 3px 12px;
  }
  .cancel-btn{
    padding: 3px 12px;
    width: auto;
    min-width: auto;
  }
  .next-btn.next-small:not(.isOnlyIcon):not(.next-btn-text) {
      min-width: auto;
  }
`;

const TagListWrap = styled.div`
  .remove-btn{
    margin-bottom: 8px;
    line-height: 24px;
    display: inline-block;
    vertical-align: middle;
  }
`

export {
  SearchWarp,
  MultiBtnWarp,
  TagListWrap
}