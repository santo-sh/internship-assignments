#include <bits/stdc++.h>
using namespace std;

vector<double>arr;
long double sum = 0;
double minScore = DBL_MAX, maxScore = DBL_MIN;

double getAverage(){
    if(arr.size() <= 2)
        return (sum)/arr.size();
    return (sum - minScore - maxScore)/(arr.size() - 2);
}

void addScore(double n){
    arr.push_back(n);
    minScore = min(minScore, n);
    maxScore = max(maxScore, n);
    sum+=n;
}

int main(){
    int choice;
    while(true){
        cout << "Program Menu: " << endl;
        cout << "1. getAverage \n2. addScore \n3. exit" << endl;
        cin >> choice;
        if(choice == 3){
            break;
        }
        switch (choice)
        {
        case 1:
            if(arr.size() == 0){
                cout << "Null" << endl;
            }else{
                cout << "Average of number in this list: " <<getAverage() << endl;
            }
            break;
        case 2: 
            double n;
            cout << "Input a number to insert in the list: ";
            cin >> n;
            addScore(n);
            break;
        default:
            cout << "Wrong choice!!" << endl;
            break;
        }
    }
    return 0;
}