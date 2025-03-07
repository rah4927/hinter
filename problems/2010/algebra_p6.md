---
id: fimo_2010_algebra_p6
year: 2010
number: 6
difficulty: medium
topics: ["algebra"]
source: "IMO 2010 Algebra Problem 6"
---

Suppose that \(f\) and \(g\) are two functions defined on the set of positive integers and taking positive integer values. Suppose also that the equations \(f(g(n))=f(n)+1\) and \(g(f(n))=\) \(g(n)+1\) hold for all positive integers. Prove that \(f(n)=g(n)\) for all positive integer \(n\).

---
Throughout the solution, by \(\mathbb{N}\) we denote the set of all positive integers. For any function \(h: \mathbb{N} \rightarrow \mathbb{N}\) and for any positive integer \(k\), define \(h^{k}(x)=\underbrace{h(h(\ldots h}_{k}(x) \ldots))(\) in particular, \(\left.h^{0}(x)=x\right)\)
Observe that \(f\left(g^{k}(x)\right)=f\left(g^{k-1}(x)\right)+1=\cdots=f(x)+k\) for any positive integer \(k\), and similarly \(g\left(f^{k}(x)\right)=g(x)+k\). Now let \(a\) and \(b\) are the minimal values attained by \(f\) and \(g\), respectively; say \(f\left(n_{f}\right)=a, g\left(n_{g}\right)=b\). Then we have \(f\left(g^{k}\left(n_{f}\right)\right)=a+k, g\left(f^{k}\left(n_{g}\right)\right)=b+k\), so the function \(f\) attains all values from the set \(N_{f}=\{a, a+1, \ldots\}\), while \(g\) attains all the values from the set \(N_{g}=\{b, b+1, \ldots\}\).
Next, note that \(f(x)=f(y)\) implies \(g(x)=g(f(x))-1=g(f(y))-1=g(y)\); surely, the converse implication also holds. Now, we say that \(x\) and \(y\) are similar (and write \(x \sim y\) ) if \(f(x)=f(y)\) (equivalently, \(g(x)=g(y)\) ). For every \(x \in \mathbb{N}\), we define \([x]=\{y \in \mathbb{N}: x \sim y\}\); surely, \(y_{1} \sim y_{2}\) for all \(y_{1}, y_{2} \in[x]\), so \([x]=[y]\) whenever \(y \in[x]\).
Now we investigate the structure of the sets \([x]\).
Claim 1. Suppose that \(f(x) \sim f(y)\); then \(x \sim y\), that is, \(f(x)=f(y)\). Consequently, each class \([x]\) contains at most one element from \(N_{f}\), as well as at most one element from \(N_{g}\).
Proof. If \(f(x) \sim f(y)\), then we have \(g(x)=g(f(x))-1=g(f(y))-1=g(y)\), so \(x \sim y\). The second statement follows now from the sets of values of \(f\) and \(g\).
Next, we clarify which classes do not contain large elements.
Claim 2. For any \(x \in \mathbb{N}\), we have \([x] \subseteq\{1,2, \ldots, b-1\}\) if and only if \(f(x)=a\). Analogously, \([x] \subseteq\{1,2, \ldots, a-1\}\) if and only if \(g(x)=b\).
Proof. We will prove that \([x] \nsubseteq\{1,2, \ldots, b-1\} \Longleftrightarrow f(x) > a\); the proof of the second statement is similar.
Note that \(f(x) > a\) implies that there exists some \(y\) satisfying \(f(y)=f(x)-1\), so \(f(g(y))=\) \(f(y)+1=f(x)\), and hence \(x \sim g(y) \geq b\). Conversely, if \(b \leq c \sim x\) then \(c=g(y)\) for some \(y \in \mathbb{N}\), which in turn follows \(f(x)=f(g(y))=f(y)+1 \geq a+1\), and hence \(f(x) > a\).
Claim 2 implies that there exists exactly one class contained in \(\{1, \ldots, a-1\}\) (that is, the class \(\left[n_{g}\right]\) ), as well as exactly one class contained in \(\{1, \ldots, b-1\}\) (the class \(\left.\left[n_{f}\right]\right)\). Assume for a moment that \(a \leq b\); then \(\left[n_{g}\right]\) is contained in \(\{1, \ldots, b-1\}\) as well, hence it coincides with \(\left[n_{g}\right]\). So, we get that
\[
f(x)=a \Longleftrightarrow g(x)=b \Longleftrightarrow x \sim n_{f} \sim n_{g} .
\]
Claim 3. \(a=b\).
Proof. By Claim 2, we have \([a] \neq\left[n_{f}\right]\), so \([a]\) should contain some element \(a^{\prime} \geq b\) by Claim 2 again. If \(a \neq a^{\prime}\), then \([a]\) contains two elements \(\geq a\) which is impossible by Claim 1 . Therefore, \(a=a^{\prime} \geq b\). Similarly, \(b \geq a\).
Now we are ready to prove the problem statement. First, we establish the following Claim 4. For every integer \(d \geq 0, f^{d+1}\left(n_{f}\right)=g^{d+1}\left(n_{f}\right)=a+d\).
Proof. Induction on \(d\). For \(d=0\), the statement follows from (1) and Claim 3. Next, for \(d > 1\) from the induction hypothesis we have \(f^{d+1}\left(n_{f}\right)=f\left(f^{d}\left(n_{f}\right)\right)=f\left(g^{d}\left(n_{f}\right)\right)=f\left(n_{f}\right)+d=a+d\). The equality \(g^{d+1}\left(n_{f}\right)=a+d\) is analogous. Finally, for each \(x \in \mathbb{N}\), we have \(f(x)=a+d\) for some \(d \geq 0\), so \(f(x)=f\left(g^{d}\left(n_{f}\right)\right)\) and hence \(x \sim g^{d}\left(n_{f}\right)\). It follows that \(g(x)=g\left(g^{d}\left(n_{f}\right)\right)=g^{d+1}\left(n_{f}\right)=a+d=f(x)\) by Claim 4.
