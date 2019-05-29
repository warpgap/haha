# Branch ::> Gap Dev
## Database Schema
 * ``` mongodb+srv://studysabai_client:Studysabai@1234@cluster0-axsta.mongodb.net/test?retryWrites=true ```

#### 1. Course Collection

```
name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  instructor: {
    type: String
  },
  level: {
    type: String
  },
  price: [
    {
      fullPrice:{
        type: String,
        required: true
      },
      discount:{
        type: String
      }
    }
  ],
  coursecontent: [
    {
      contentId: {
        type: Schema.Types.ObjectId
      },
      order: {
        type: Number
      },
      type: {
        type: String
      },
      data: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
  ```
#### 2. User Collection