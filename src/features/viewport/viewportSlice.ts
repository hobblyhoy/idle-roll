import { createAppSlice } from '../../app/createAppSlice';

const MOBILE_BREAKPOINT = 640;

export interface ViewportSliceState {
  isMobile: boolean;
}

const initialState: ViewportSliceState = {
  isMobile: window.innerWidth < MOBILE_BREAKPOINT,
};

export const viewportSlice = createAppSlice({
  name: 'viewport',
  initialState,
  reducers: create => ({
    updateIsMobile: create.reducer((state, action: { payload: boolean }) => {
      state.isMobile = action.payload;
    }),
  }),
  selectors: {
    selectIsMobile: state => state.isMobile,
  },
});

export const { updateIsMobile } = viewportSlice.actions;
export const { selectIsMobile } = viewportSlice.selectors;

// Initialize listener
let isListenerInitialized = false;

export const initializeBreakpointListener = (dispatch: any) => {
  if (isListenerInitialized) return;
  
  const handleResize = () => {
    const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
    dispatch(updateIsMobile(isMobile));
  };

  window.addEventListener('resize', handleResize);
  isListenerInitialized = true;
};
