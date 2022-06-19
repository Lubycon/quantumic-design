import { useOverlay } from 'src';

export function OverlayStory() {
  const { open } = useOverlay();
  return (
    <button
      onClick={() => {
        open(({ isOpen, close }) => {
          return (
            <div style={{ display: isOpen ? 'block' : 'none' }}>
              모달입니다.
              <button onClick={close}>닫기</button>
            </div>
          );
        });
      }}
    >
      모달 열기
    </button>
  );
}

export function OverlayWithPromiseStory() {
  const { open } = useOverlay();

  const openModal = () => {
    return new Promise<void>((resolve) => {
      open(({ isOpen, close }) => {
        return (
          <div style={{ display: isOpen ? 'block' : 'none' }}>
            모달입니다.
            <button
              onClick={() => {
                close();
                resolve();
              }}
            >
              닫기
            </button>
          </div>
        );
      });
    });
  };

  return (
    <button
      onClick={async () => {
        await openModal();
        alert('모달 닫힘');
      }}
    >
      모달 열기
    </button>
  );
}
