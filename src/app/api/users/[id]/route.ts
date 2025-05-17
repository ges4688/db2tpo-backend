import { NextResponse } from 'next/server';
import { User } from '@/models/User';
import { connectToDatabase } from '@/lib/mongodb';
import { ApiResponse } from '@/types/api';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDatabase();
    const user = await User.findById(params.id).select('-password');

    if (!user) {
      return NextResponse.json<ApiResponse>({
        returnCode: 'ERROR',
        data: null,
        message: 'User not found'
      }, { status: 404 });
    }

    return NextResponse.json<ApiResponse>({
      returnCode: 'SUCCESS',
      data: user,
      message: 'User found'
    });

  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json<ApiResponse>({
      returnCode: 'ERROR',
      data: null,
      message: 'Error fetching user'
    }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDatabase();
    const body = await request.json();
    const { username, email } = body;

    // Validate required fields
    if (!username && !email) {
      return NextResponse.json<ApiResponse>({
        returnCode: 'ERROR',
        data: null,
        message: 'No fields to update'
      }, { status: 400 });
    }

    // Check if user exists
    const user = await User.findById(params.id);
    if (!user) {
      return NextResponse.json<ApiResponse>({
        returnCode: 'ERROR',
        data: null,
        message: 'User not found'
      }, { status: 404 });
    }

    // Check if new username or email already exists
    if (username || email) {
      const existingUser = await User.findOne({
        _id: { $ne: params.id },
        $or: [
          ...(username ? [{ username }] : []),
          ...(email ? [{ email }] : [])
        ]
      });

      if (existingUser) {
        return NextResponse.json<ApiResponse>({
          returnCode: 'ERROR',
          data: null,
          message: 'Username or email already in use'
        }, { status: 400 });
      }
    }

    // Update user
    const updatedUser = await User.findByIdAndUpdate(
      params.id,
      { $set: { ...body } },
      { new: true }
    ).select('-password');

    return NextResponse.json<ApiResponse>({
      returnCode: 'SUCCESS',
      data: updatedUser,
      message: 'User updated successfully'
    });

  } catch (error) {
    console.error('Error updating user:', error);
    return NextResponse.json<ApiResponse>({
      returnCode: 'ERROR',
      data: null,
      message: 'Error updating user'
    }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDatabase();
    const user = await User.findByIdAndDelete(params.id);

    if (!user) {
      return NextResponse.json<ApiResponse>({
        returnCode: 'ERROR',
        data: null,
        message: 'User not found'
      }, { status: 404 });
    }

    return NextResponse.json<ApiResponse>({
      returnCode: 'SUCCESS',
      data: null,
      message: 'User deleted successfully'
    });

  } catch (error) {
    console.error('Error deleting user:', error);
    return NextResponse.json<ApiResponse>({
      returnCode: 'ERROR',
      data: null,
      message: 'Error deleting user'
    }, { status: 500 });
  }
} 