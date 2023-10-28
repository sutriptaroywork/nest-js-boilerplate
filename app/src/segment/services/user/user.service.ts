import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getHello(): string {
    return 'Hello Folks! Service is running';
  }

  getResult(id: string): object {
    return new Promise((resolve, reject) => {
      console.log('id > ', id);
      if (id === '111') {
        console.log('if');
        // reject([
        //   {
        //     success: 'false',
        //   },
        // ]);
        reject({
          success: 'false',
        });
      } else {
        console.log('else');
        resolve({
          success: 'true',
        });
      }
    });
  }
}
