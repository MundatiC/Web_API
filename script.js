function listPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        const postsList = document.getElementById('postsList');
        postsList.innerHTML = '';
        posts.forEach(post => {
          const listItem = document.createElement('li');
          listItem.innerHTML = `<strong>Post id:</strong> ${post.id}<br>
                                <strong>User id:</strong> ${post.userId}<br>
                                <strong>Title:</strong> ${post.title}<br>
                                <strong>Body:</strong> ${post.body}<br>`;
          postsList.appendChild(listItem);
        });
      })
      .catch(error => console.log(error));
  }
  
  function createPost() {
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;
  
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({ title, body, userId: 1 }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(post => {
        console.log('Post created:', post);
        // Clear input fields
        document.getElementById('title').value = '';
        document.getElementById('body').value = '';
      })
      .catch(error => console.log(error));
  }
  
  function updatePost() {
    const postId = document.getElementById('postIdToUpdate').value;
    const updatedTitle = document.getElementById('updatedTitle').value;
    const updatedBody = document.getElementById('updatedBody').value;
  
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: 'PUT',
      body: JSON.stringify({ title: updatedTitle, body: updatedBody }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(post => {
        console.log('Post updated:', post);
        // Clear input fields
        document.getElementById('postIdToUpdate').value = '';
        document.getElementById('updatedTitle').value = '';
        document.getElementById('updatedBody').value = '';
      })
      .catch(error => console.log(error));
  }
  
  function deletePost() {
    const postId = document.getElementById('postIdToDelete').value;
  
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch post details');
        }
      })
      .then(post => {
        console.log('Post to delete:', post);
        return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
          method: 'DELETE',
        });
      })
      .then(response => {
        if (response.ok) {
          console.log('Post deleted');
          // Clear input field
          document.getElementById('postIdToDelete').value = '';
        } else {
          console.log('Post deletion failed:', response.status);
        }
      })
      .catch(error => console.log(error));
  }
  
  
  
  
  function filterPosts() {
    const userId = document.getElementById('userId').value;
  
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then(response => response.json())
      .then(posts => {
        const postsList = document.getElementById('postsList');
        postsList.innerHTML = '';
        posts.forEach(post => {
          const listItem = document.createElement('li');
          listItem.innerHTML = `<strong>Post id:</strong> ${post.id}<br>
                                <strong>User id:</strong> ${post.userId}<br>
                                <strong>Title:</strong> ${post.title}<br>
                                <strong>Body:</strong> ${post.body}<br>`;
          postsList.appendChild(listItem);
        });
      })
      .catch(error => console.log(error));
  }
  