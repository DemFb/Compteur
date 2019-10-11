export default function(count = 0, action) {
    if(action.type == 'increasse') {
        return count + 1;
    } else {
        return count;
    }
  }