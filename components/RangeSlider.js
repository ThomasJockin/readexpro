import styled from '@emotion/styled'
import { jsx, css } from '@emotion/core'


const RangeSlider = styled('input')`
& {
  -webkit-appearance: none;
  width: 100%;
  margin: 0.618rem 0;
}
&:focus {
  outline: none;
}
&::-webkit-slider-runnable-track {
  width: 100%;
  height: 1px;
  cursor: grab;
  &:active { cursor: grabbing; }
  box-shadow: 0.9px 0.9px 1.7px rgba(0, 34, 0, 0), 0px 0px 0.9px rgba(0, 60, 0, 0);
  background: rgba(0, 0, 0, 0.24);
  border-radius: 1px;
  border: 0px solid rgba(24, 213, 1, 0);
}
&::-webkit-slider-thumb {
  border: 1px solid rgba(0,0,0,0.4);
  height: 12px;
  width: 18px;
  border-radius: 3px;
  background: white;
  cursor: grab;
  &:active { cursor: grabbing; }
  -webkit-appearance: none;
  margin-top: -5.5px;
}
&:focus::-webkit-slider-runnable-track {
  background: rgba(0, 0, 0, 0.24);
}
&::-moz-range-track {
  width: 100%;
  height: 1px;
  cursor: grab;
  &:active { cursor: grabbing; }
  box-shadow: 0.9px 0.9px 1.7px rgba(0, 34, 0, 0), 0px 0px 0.9px rgba(0, 60, 0, 0);
  background: rgba(0, 0, 0, 0.24);
  border-radius: 1px;
  border: 0px solid rgba(24, 213, 1, 0);
}
&::-moz-range-thumb {
  border: 1px solid rgba(0,0,0,0.4);
  height: 12px;
  width: 18px;
  border-radius: 3px;
  background: white;
  cursor: grab;
  &:active { cursor: grabbing; }
}
&::-ms-track {
  width: 100%;
  height: 1px;
  cursor: grab;
  &:active { cursor: grabbing; }
  background: transparent;
  border-color: transparent;
  color: transparent;
}
&::-ms-fill-lower {
  background: rgba(0, 0, 0, 0.24);
  border: 0px solid rgba(24, 213, 1, 0);
  border-radius: 2px;
  box-shadow: 0.9px 0.9px 1.7px rgba(0, 34, 0, 0), 0px 0px 0.9px rgba(0, 60, 0, 0);
}
&::-ms-fill-upper {
  background: rgba(0, 0, 0, 0.24);
  border: 0px solid rgba(24, 213, 1, 0);
  border-radius: 2px;
  box-shadow: 0.9px 0.9px 1.7px rgba(0, 34, 0, 0), 0px 0px 0.9px rgba(0, 60, 0, 0);
}
&::-ms-thumb {
  border: 1px solid rgba(0,0,0,0.4);
  height: 12px;
  width: 18px;
  border-radius: 3px;
  background: white;
  cursor: grab;
  &:active { cursor: grabbing; }
  height: 1px;
}
&:focus::-ms-fill-lower {
  background: rgba(0, 0, 0, 0.24);
}
&:focus::-ms-fill-upper {
  background: rgba(0, 0, 0, 0.24);
}

`

export default props => <RangeSlider type="range" {...props}/>
