import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from 'src/boot/firebase';
import { v4 as uuidv4 } from 'uuid';
import { readAndCompressImage } from 'browser-image-resizer';

// 이미지 업로드
export async function uploadImage(file) {
  // 저장위치(디렉토리) 는 아래처럼 '저장위치/' 로 설정 가능하다.
  // 참조 정보 생성(ref)
  const filename = `images/${uuidv4()}.${getExtension(file.name)}`;
  const storageRef = ref(storage, filename);
  //이미지 압축
  const thumbnail = await compressImage(file);
  //이미지 업로드
  const uploadResult = await uploadBytes(storageRef, thumbnail);
  //이미지 url 가져오기
  const downloadURL = await getDownloadURL(uploadResult.ref);

  console.log('downloadURL : ', downloadURL);
  return downloadURL;
}

// 이미지 확장자 가져오기
function getExtension(filename) {
  return filename.split('.').pop();
}

// 이미지 압축
async function compressImage(file) {
  return readAndCompressImage(file, {
    quality: 0.8,
  });
}
