const calc = `#include <stdio.h>
#include <string.h>

int main()
{
    char expr[100];
    int nums[100];
    char ops[100];

    int nums_index = -1;
    int ops_index = -1;

    gets(expr);
    int len = strlen(expr);
    int i;
    for (i = len - 1; i >= 0; i = i - 1)
    {
        expr[i + 1] = expr[i];
    }
    expr[0] = '(';
    expr[len + 1] = ')';
    len = len + 2;

    i = len - 1;
    int num = 0;
    int k = 1;
    while (i >= 0)
    {
        if (expr[i] == '*')
        {
            ops_index = ops_index + 1;
            ops[ops_index] = '*';
            i = i - 1;
        }
        else if (expr[i] == '/')
        {
            ops_index = ops_index + 1;
            ops[ops_index] = '/';
            i = i - 1;
        }
        else if (expr[i] == '+')
        {
            while (ops_index >= 0 && ((ops[ops_index] == '*') || (ops[ops_index] == '/')))
            {
                if (ops[ops_index] == '*')
                {
                    nums[nums_index - 1] = nums[nums_index] * nums[nums_index - 1];
                }
                else
                {
                    nums[nums_index - 1] = nums[nums_index] / nums[nums_index - 1];
                }
                nums_index = nums_index - 1;
                ops_index = ops_index - 1;
            }
            ops_index = ops_index + 1;
            ops[ops_index] = '+';
            i = i - 1;
        }
        else if (expr[i] == '-')
        {
            while (ops_index >= 0 && ((ops[ops_index] == '*') || (ops[ops_index] == '/')))
            {
                if (ops[ops_index] == '*')
                {
                    nums[nums_index - 1] = nums[nums_index] * nums[nums_index - 1];
                }
                else
                {
                    nums[nums_index - 1] = nums[nums_index] / nums[nums_index - 1];
                }
                nums_index = nums_index - 1;
                ops_index = ops_index - 1;
            }
            ops_index = ops_index + 1;
            ops[ops_index] = '-';
            i = i - 1;
        }
        else if (expr[i] == '(')
        {
            while (ops[ops_index] != ')')
            {
                char ch = ops[ops_index];
                ops_index = ops_index - 1;
                if (ch == '+')
                {
                    nums[nums_index - 1] = nums[nums_index] + nums[nums_index - 1];
                }
                else if (ch == '-')
                {
                    nums[nums_index - 1] = nums[nums_index] - nums[nums_index - 1];
                }
                else if (ch == '*')
                {
                    nums[nums_index - 1] = nums[nums_index] * nums[nums_index - 1];
                }
                else if (ch == '/')
                {
                    nums[nums_index - 1] = nums[nums_index] / nums[nums_index - 1];
                }
                nums_index = nums_index - 1;
            }
            ops_index = ops_index - 1;
            i = i - 1;
        }
        else if (expr[i] == ')')
        {
            ops_index = ops_index + 1;
            ops[ops_index] = ')';
            i = i - 1;
        }
        else
        {
            num = 0;
            k = 1;
            while (i >= 0 && expr[i] >= '0' && expr[i] <= '9')
            {
                num = num + (expr[i] - '0') * k;
                k = k * 10;
                i = i - 1;
            }
            nums_index = nums_index + 1;
            nums[nums_index] = num;
        }
    }
    printf("%d\n", nums[0]);
    return 0;
}
`

const sort = `
#include <stdlib.h>
#include <string.h>
#include <stdio.h>

int main()
{
    char s[100];
    int n[100];
    int num = 0;
    gets(s);

    int i = 0;
    int j = 0;
    int len = strlen(s);
    for (i = 0; i < len; i = i + 1)
    {
        if (s[i] != ',')
        {
            int tmp = s[i];
            n[j] = tmp - 48;
            j = j + 1;
            num = num + 1;
        }
    }

    for (i = 0; i < num; i = i + 1)
    {
        for (j = 0; j < num - i - 1; j = j + 1)
        {
            if (n[j] > n[j + 1])
            {
                int tmp = n[j];
                n[j] = n[j + 1];
                n[j + 1] = tmp;
            }
        }
    }

    for (i = 0; i < num-1; i = i + 1)
    {
        printf("%d,", n[i]);
    }
    printf("%d\n",n[num-1]);

    return 0;
}
`

const dfs = `
#include <stdio.h>
#include <stdlib.h>

struct Node
{
    int value;
    int left;
    int right;
};

struct Node nodes[100];

int num;

void pre_order(int n)
{
    if (n >= num)
    {
        return;
    }

    printf("%d ", nodes[n].value);
    if (nodes[n].left != -1)
    {
        pre_order(nodes[n].left);
    }
    if (nodes[n].right != -1)
    {
        pre_order(nodes[n].right);
    }

    return;
}

int main()
{
    char s[100];
    gets(s);

    int i = 0;
    int j = 0;
    int len = strlen(s);
    for (i = 0; i < len; i = i + 1)
    {
        if (s[i] != ',')
        {
            int tmp = s[i];

            nodes[j].value = tmp - 48;
            nodes[j].left = -1;
            nodes[j].right = -1;

            j = j + 1;
            num = num + 1;
        }
    }

    for (i = 0; i < num; i = i + 1)
    {
        if (2 * i + 1 < num)
        {
            nodes[i].left = 2 * i + 1;
        }
        if (2 * i + 2 < num)
        {
            nodes[i].right = 2 * i + 2;
        }
    }

    pre_order(0);
    printf("\n");

    return 0;
}
`

const kmp = `
#include <string.h>
#include <stdlib.h>

int main()
{
    char s[100];
    char t[100];
    int next[100];
    int s_len, t_len;
    int i = 0;
    int j = 0;
    int flag = 0;

    gets(s);
    gets(t);
    s_len = strlen(s);
    t_len = strlen(t);

    next[0] = -1;
    for (i = 1, j = -1; i < t_len; i = i + 1)
    {
        for (; j >= 0 && t[i] != t[j + 1]; j = next[j])
            ;
        if (t[i] == t[j + 1])
        {
            j = j + 1;
        }
        next[i] = j;
    }

    for (i = 0, j = -1; i < s_len; i = i + 1)
    {
        for (; j >= 0 && s[i] != t[j + 1]; j = next[j])
            ;
        if (s[i] == t[j + 1])
        {
            j = j + 1;
        }
        if (j == t_len - 1)
        {
            printf("%d,", i - j);
            flag = 1;
            j = next[j];
        }
    }
    if (flag == 0)
    {
        printf("No Match\n");
    }
    else{
        printf("\n");
    }

    return 0;
}
`

const palindrome = `
#include <string.h>
#include <stdlib.h>

int main()
{
    char s[100];
    char t[100];
    int next[100];
    int s_len, t_len;
    int i = 0;
    int j = 0;
    int flag = 0;

    gets(s);
    gets(t);
    s_len = strlen(s);
    t_len = strlen(t);

    next[0] = -1;
    for (i = 1, j = -1; i < t_len; i = i + 1)
    {
        for (; j >= 0 && t[i] != t[j + 1]; j = next[j])
            ;
        if (t[i] == t[j + 1])
        {
            j = j + 1;
        }
        next[i] = j;
    }

    for (i = 0, j = -1; i < s_len; i = i + 1)
    {
        for (; j >= 0 && s[i] != t[j + 1]; j = next[j])
            ;
        if (s[i] == t[j + 1])
        {
            j = j + 1;
        }
        if (j == t_len - 1)
        {
            printf("%d,", i - j);
            flag = 1;
            j = next[j];
        }
    }
    if (flag == 0)
    {
        printf("No Match\n");
    }
    else{
        printf("\n");
    }

    return 0;
}
`

export default {
    calc,
    dfs,
    kmp,
    palindrome,
    sort
}