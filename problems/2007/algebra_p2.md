---
id: fimo_2007_algebra_p2
year: 2007
number: 2
difficulty: medium
topics: ["algebra"]
source: "IMO 2007 Algebra Problem 2"
---

Consider those functions \(f: \mathbb{N} \rightarrow \mathbb{N}\) which satisfy the condition

\[
f(m+n) \geq f(m)+f(f(n))-1
\]

for all \(m, n \in \mathbb{N}\). Find all possible values of \(f(2007)\).

\((\mathbb{N}\) denotes the set of all positive integers.)

The final answers are 1, 2, .., 2008.

---
Suppose that a function \(f: \mathbb{N} \rightarrow \mathbb{N}\) satisfies (1). For arbitrary positive integers \(m > n\), by (1) we have

\[
f(m)=f(n+(m-n)) \geq f(n)+f(f(m-n))-1 \geq f(n),
\]

so \(f\) is nondecreasing.

Function \(f \equiv 1\) is an obvious solution. To find other solutions, assume that \(f \not \equiv 1\) and take the smallest \(a \in \mathbb{N}\) such that \(f(a) > 1\). Then \(f(b) \geq f(a) > 1\) for all integer \(b \geq a\).

Suppose that \(f(n) > n\) for some \(n \in \mathbb{N}\). Then we have

\[
f(f(n))=f((f(n)-n)+n) \geq f(f(n)-n)+f(f(n))-1
\]

so \(f(f(n)-n) \leq 1\) and hence \(f(n)-n < a\). Then there exists a maximal value of the expression \(f(n)-n\); denote this value by \(c\), and let \(f(k)-k=c \geq 1\). Applying the monotonicity together with (1), we get

\[
\begin{aligned}
2 k+c \geq f(2 k)=f(k+k) & \geq f(k)+f(f(k))-1 \\
& \geq f(k)+f(k)-1=2(k+c)-1=2 k+(2 c-1),
\end{aligned}
\]

hence \(c \leq 1\) and \(f(n) \leq n+1\) for all \(n \in \mathbb{N}\). In particular, \(f(2007) \leq 2008\).

Now we present a family of examples showing that all values from 1 to 2008 can be realized. Let

\[
f_{j}(n)=\max \{1, n+j-2007\} \quad \text { for } j=1,2, \ldots, 2007 ; \quad f_{2008}(n)= \begin{cases}n, & 2007 \backslash n \\ n+1, & 2007 \mid n .\end{cases}
\]

We show that these functions satisfy the condition (1) and clearly \(f_{j}(2007)=j\).

To check the condition (1) for the function \(f_{j}(j \leq 2007)\), note first that \(f_{j}\) is nondecreasing and \(f_{j}(n) \leq n\), hence \(f_{j}\left(f_{j}(n)\right) \leq f_{j}(n) \leq n\) for all \(n \in \mathbb{N}\). Now, if \(f_{j}(m)=1\), then the inequality (1) is clear since \(f_{j}(m+n) \geq f_{j}(n) \geq f_{j}\left(f_{j}(n)\right)=f_{j}(m)+f_{j}\left(f_{j}(n)\right)-1\). Otherwise,

\[
f_{j}(m)+f_{j}\left(f_{j}(n)\right)-1 \leq(m+j-2007)+n=(m+n)+j-2007=f_{j}(m+n) .
\]

In the case \(j=2008\), clearly \(n+1 \geq f_{2008}(n) \geq n\) for all \(n \in \mathbb{N}\); moreover, \(n+1 \geq\) \(f_{2008}\left(f_{2008}(n)\right)\) as well. Actually, the latter is trivial if \(f_{2008}(n)=n\); otherwise, \(f_{2008}(n)=n+1\), which implies \(2007 \nmid n+1\) and hence \(n+1=f_{2008}(n+1)=f_{2008}\left(f_{2008}(n)\right)\).

So, if \(2007 \mid m+n\), then

\[
f_{2008}(m+n)=m+n+1=(m+1)+(n+1)-1 \geq f_{2008}(m)+f_{2008}\left(f_{2008}(n)\right)-1 .
\]

Otherwise, \(2007 \nmid m+n\), hence \(2007 \Varangle m\) or \(2007 \nless n\). In the former case we have \(f_{2008}(m)=m\), while in the latter one \(f_{2008}\left(f_{2008}(n)\right)=f_{2008}(n)=n\), providing

\[
f_{2008}(m)+f_{2008}\left(f_{2008}(n)\right)-1 \leq(m+n+1)-1=f_{2008}(m+n) .
\]
