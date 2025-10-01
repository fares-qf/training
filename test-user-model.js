const { User } = require('./models');

async function testUserModel() {
  try {
    console.log('Testing User model...');
    
    // Create a new user
    const user = await User.create({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      age: 30
    });
    
    console.log('User created successfully:', user.toJSON());
    
    // Find all users
    const users = await User.findAll();
    console.log('All users:', users.map(u => u.toJSON()));
    
    // Find user by email
    const foundUser = await User.findOne({
      where: { email: 'john.doe@example.com' }
    });
    console.log('Found user by email:', foundUser ? foundUser.toJSON() : 'Not found');
    
    console.log('Test completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error testing User model:', error);
    process.exit(1);
  }
}

testUserModel();