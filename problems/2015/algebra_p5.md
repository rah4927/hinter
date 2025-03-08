---
id: fimo_2015_algebra_p5
year: 2015
number: 5
difficulty: medium
topics: ["algebra"]
source: "IMO 2015 Algebra Problem 5"
---

Let \(2 \mathbb{Z}+1\) denote the set of odd integers. Find all functions \(f: \mathbb{Z} \rightarrow 2 \mathbb{Z}+1\) satisfying
\[
f(x+f(x)+y)+f(x-f(x)-y)=f(x+y)+f(x-y)
\]
for every \(x, y \in \mathbb{Z}\).
\[
f(m d+i)=2 k m d+\ell_{i} d \quad(m \in \mathbb{Z}, \quad i=0,1, \ldots, d-1)
\]
satisfies the problem requirements, and these are all such functions.

---
Throughout the solution, all functions are assumed to map integers to integers.
For any function \(g\) and any nonzero integer \(t\), define
\[
\Delta_{t} g(x)=g(x+t)-g(x) .
\]
For any nonzero integers \(a\) and \(b\), notice that \(\Delta_{a} \Delta_{b} g=\Delta_{b} \Delta_{a} g\). Moreover, if \(\Delta_{a} g=0\) and \(\Delta_{b} g=0\), then \(\Delta_{a+b} g=0\) and \(\Delta_{a t} g=0\) for all nonzero integers \(t\). We say that \(g\) is \(t\)-quasiperiodic if \(\Delta_{t} g\) is a constant function (in other words, if \(\Delta_{1} \Delta_{t} g=0\), or \(\Delta_{1} g\) is \(t\)-periodic). In this case, we call \(t\) a quasi-period of \(g\). We say that \(g\) is quasi-periodic if it is \(t\)-quasi-periodic for some nonzero integer \(t\).
Notice that a quasi-period of \(g\) is a period of \(\Delta_{1} g\). So if \(g\) is quasi-periodic, then its minimal positive quasi-period \(t\) divides all its quasi-periods.
We now assume that \(f\) satisfies (1). First, by setting \(a=x+y\), the problem condition can be rewritten as
\[
\Delta_{f(x)} f(a)=\Delta_{f(x)} f(2 x-a-f(x)) \quad \text { for all } x, a \in \mathbb{Z} .
\]
Let \(b\) be an arbitrary integer and let \(k\) be an arbitrary positive integer. Applying (2) when \(a\) is substituted by \(b, b+f(x), \ldots, b+(k-1) f(x)\) and summing up all these equations, we get
\[
\Delta_{k f(x)} f(b)=\Delta_{k f(x)} f(2 x-b-k f(x)) .
\]
Notice that a similar argument works when \(k\) is negative, so that
\[
\Delta_{M} f(b)=\Delta_{M} f(2 x-b-M) \quad \text { for any nonzero integer } M \text { such that } f(x) \mid M
\]
We now prove two lemmas.
Lemma 1. For any distinct integers \(x\) and \(y\), the function \(\Delta_{\operatorname{lcm}(f(x), f(y))} f\) is \(2(y-x)\)-periodic. Proof. Denote \(L=\operatorname{lcm}(f(x), f(y))\). Applying (3) twice, we obtain
\[
\Delta_{L} f(b)=\Delta_{L} f(2 x-b-L)=\Delta_{L} f(2 y-(b+2(y-x))-L)=\Delta_{L} f(b+2(y-x)) .
\]
Thus, the function \(\Delta_{L} f\) is \(2(y-x)\)-periodic, as required.
Lemma 2. Let \(g\) be a function. If \(t\) and \(s\) are nonzero integers such that \(\Delta_{t s} g=0\) and \(\Delta_{t} \Delta_{t} g=0\), then \(\Delta_{t} g=0\)
Proof. Assume, without loss of generality, that \(s\) is positive. Let a be an arbitrary integer. Since \(\Delta_{t} \Delta_{t} g=0\), we have
\[
\Delta_{t} g(a)=\Delta_{t} g(a+t)=\cdots=\Delta_{t} g(a+(s-1) t) .
\]
The sum of these \(s\) equal numbers is \(\Delta_{t s} g(a)=0\), so each of them is zero, as required. We now return to the solution.
Step 1. We prove that \(f\) is quasi-periodic.
Let \(Q=\operatorname{lcm}(f(0), f(1))\). Applying Lemma 1, we get that the function \(g=\Delta_{Q} f\) is 2-periodic. In other words, the values of \(g\) are constant on even numbers and on odd numbers separately. Moreover, setting \(M=Q\) and \(x=b=0\) in (3), we get \(g(0)=g(-Q)\). Since 0 and \(-Q\) have different parities, the value of \(g\) at even numbers is the same as that at odd numbers. Thus, \(g\) is constant, which means that \(Q\) is a quasi-period of \(f\).
Step 2. Denote the minimal positive quasi-period of \(f\) by \(T\). We prove that \(T \mid f(x)\) for all integers \(x\).
Since an odd number \(Q\) is a quasi-period of \(f\), the number \(T\) is also odd. Now suppose, to the contrary, that there exist an odd prime \(p\), a positive integer \(\alpha\), and an integer \(u\) such that \(p^{\alpha} \mid T\) but \(p^{\alpha} \nmid f(u)\). Setting \(x=u\) and \(y=0\) in \((1)\), we have \(2 f(u)=f(u+f(u))+f(u-f(u))\), so \(p^{\alpha}\) does not divide the value of \(f\) at one of the points \(u+f(u)\) or \(u-f(u)\). Denote this point by \(v\).
Let \(L=\operatorname{lcm}(f(u), f(v))\). Since \(|u-v|=f(u)\), from Lemma 1 we get \(\Delta_{2 f(u)} \Delta_{L} f=0\). Hence the function \(\Delta_{L} f\) is \(2 f(u)\)-periodic as well as \(T\)-periodic, so it is \(\operatorname{gcd}(T, 2 f(u))\)-periodic, or \(\Delta_{\operatorname{gcd}(T, 2 f(u))} \Delta_{L} f=0\). Similarly, observe that the function \(\Delta_{\operatorname{gcd}(T, 2 f(u))} f\) is \(L\)-periodic as well as \(T\)-periodic, so we may conclude that \(\Delta_{\operatorname{gcd}(T, L)} \Delta_{\operatorname{gcd}(T, 2 f(u))} f=0\). Since \(p^{\alpha} \nmid L\), both \(\operatorname{gcd}(T, 2 f(u))\) and \(\operatorname{gcd}(T, L)\) divide \(T / p\). We thus obtain \(\Delta_{T / p} \Delta_{T / p} f=0\), which yields
\[
\Delta_{T / p} \Delta_{T / p} \Delta_{1} f=0 .
\]
Since \(\Delta_{T} \Delta_{1} f=0\), we can apply Lemma 2 to the function \(\Delta_{1} f\), obtaining \(\Delta_{T / p} \Delta_{1} f=0\). However, this means that \(f\) is \((T / p)\)-quasi-periodic, contradicting the minimality of \(T\). Our claim is proved.
Step 3. We describe all functions \(f\).
Let \(d\) be the greatest common divisor of all values of \(f\). Then \(d\) is odd. By Step \(2, d\) is a quasi-period of \(f\), so that \(\Delta_{d} f\) is constant. Since the value of \(\Delta_{d} f\) is even and divisible by \(d\), we may denote this constant by \(2 d k\), where \(k\) is an integer. Next, for all \(i=0,1, \ldots, d-1\), define \(\ell_{i}=f(i) / d\); notice that \(\ell_{i}\) is odd. Then
\[
f(m d+i)=\Delta_{m d} f(i)+f(i)=2 k m d+\ell_{i} d \quad \text { for all } m \in \mathbb{Z} \quad \text { and } i=0,1, \ldots, d-1 .
\]
This shows that all functions satisfying (1) are listed in the answer.
It remains to check that all such functions indeed satisfy (1). This is equivalent to checking (2), which is true because for every integer \(x\), the value of \(f(x)\) is divisible by \(d\), so that \(\Delta_{f(x)} f\) is constant.
