import express, { Request, Response } from "express";
import { validateUsers } from "./validations";
import { User } from "./types";

export const analyzeUsers = (request: Request, response: Response) => {
  try {
    const { users }: { users: User[] } = request.body;

    const validationsErrors = validateUsers(users);

    if (validationsErrors.length) {
      return response.status(422).json({
        success: false,
        validationsErrors,
      });
    }

    const totalUserCount = users.length;
    let totalAge = 0;
    const departmentWiseUserCount: { [key: string]: number } = {};
    let highestPaidUser: User | null = null;

    for (const user of users) {
      totalAge += user.age;

      if (departmentWiseUserCount[user.department]) {
        departmentWiseUserCount[user.department]++;
      } else {
        departmentWiseUserCount[user.department] = 1;
      }

      if (!!highestPaidUser && user.salary > highestPaidUser.salary) {
        highestPaidUser = user;
      } else {
        highestPaidUser = user;
      }
    }

    return response.status(200).json({
      success: true,
      data: {
        totalUserCount,
        averageUserAge: (totalAge / totalUserCount).toFixed(2),
        departmentWiseUserCount,
        highestPaidUser,
      },
    });
  } catch (error) {
    return response.status(400).json({
      success: false,
      error,
      errorMessage: "Bad Request",
    });
  }
};
